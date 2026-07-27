import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-low-exp-server-france');
}

export default function NtoStarLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-low-exp-server-france" />;
}
