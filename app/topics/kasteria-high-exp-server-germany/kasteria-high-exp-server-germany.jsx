import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-high-exp-server-germany');
}

export default function KasteriaHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-high-exp-server-germany" />;
}
