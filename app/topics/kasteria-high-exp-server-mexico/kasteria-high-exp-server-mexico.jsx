import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-high-exp-server-mexico');
}

export default function KasteriaHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="kasteria-high-exp-server-mexico" />;
}
