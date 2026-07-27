import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-fresh-start-server-argentina');
}

export default function KasteriaFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-fresh-start-server-argentina" />;
}
