import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-baiak-server-usa');
}

export default function RealeraBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-baiak-server-usa" />;
}
