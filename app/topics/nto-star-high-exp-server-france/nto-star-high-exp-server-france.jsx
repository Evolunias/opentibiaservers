import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-high-exp-server-france');
}

export default function NtoStarHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-high-exp-server-france" />;
}
