import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-low-exp-server-usa');
}

export default function KasteriaLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-low-exp-server-usa" />;
}
