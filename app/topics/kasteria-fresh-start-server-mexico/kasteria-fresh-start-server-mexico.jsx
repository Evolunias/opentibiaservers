import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-fresh-start-server-mexico');
}

export default function KasteriaFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="kasteria-fresh-start-server-mexico" />;
}
