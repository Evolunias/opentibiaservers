import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-low-exp-server-argentina');
}

export default function KasteriaLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-low-exp-server-argentina" />;
}
