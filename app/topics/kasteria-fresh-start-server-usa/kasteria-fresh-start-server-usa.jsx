import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-fresh-start-server-usa');
}

export default function KasteriaFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-fresh-start-server-usa" />;
}
