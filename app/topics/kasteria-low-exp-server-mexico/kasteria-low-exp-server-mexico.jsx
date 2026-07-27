import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-low-exp-server-mexico');
}

export default function KasteriaLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="kasteria-low-exp-server-mexico" />;
}
