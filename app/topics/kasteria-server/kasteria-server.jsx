import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-server');
}

export default function KasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-server" />;
}
