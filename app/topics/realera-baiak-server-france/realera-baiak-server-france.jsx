import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-baiak-server-france');
}

export default function RealeraBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-baiak-server-france" />;
}
