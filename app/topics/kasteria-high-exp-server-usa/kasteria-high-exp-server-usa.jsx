import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-high-exp-server-usa');
}

export default function KasteriaHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-high-exp-server-usa" />;
}
