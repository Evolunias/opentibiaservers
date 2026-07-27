import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-low-exp-server-brazil');
}

export default function KasteriaLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-low-exp-server-brazil" />;
}
