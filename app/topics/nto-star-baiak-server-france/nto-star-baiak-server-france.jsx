import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-baiak-server-france');
}

export default function NtoStarBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-baiak-server-france" />;
}
