import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-fresh-start-server-germany');
}

export default function KasteriaFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-fresh-start-server-germany" />;
}
