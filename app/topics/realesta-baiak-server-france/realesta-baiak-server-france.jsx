import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-baiak-server-france');
}

export default function RealestaBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-baiak-server-france" />;
}
