import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-baiak-server-mexico');
}

export default function RealeraBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realera-baiak-server-mexico" />;
}
