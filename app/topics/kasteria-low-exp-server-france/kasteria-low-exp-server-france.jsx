import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-low-exp-server-france');
}

export default function KasteriaLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-low-exp-server-france" />;
}
