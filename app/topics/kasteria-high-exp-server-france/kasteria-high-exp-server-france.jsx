import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-high-exp-server-france');
}

export default function KasteriaHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-high-exp-server-france" />;
}
