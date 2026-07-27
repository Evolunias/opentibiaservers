import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-high-exp-server-argentina');
}

export default function KasteriaHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-high-exp-server-argentina" />;
}
