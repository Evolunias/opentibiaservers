import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-fun-server');
}

export default function KasteriaFunServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-fun-server" />;
}
