import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-low-exp-server-germany');
}

export default function KasteriaLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-low-exp-server-germany" />;
}
