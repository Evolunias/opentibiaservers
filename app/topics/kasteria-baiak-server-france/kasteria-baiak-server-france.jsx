import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-baiak-server-france');
}

export default function KasteriaBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-baiak-server-france" />;
}
