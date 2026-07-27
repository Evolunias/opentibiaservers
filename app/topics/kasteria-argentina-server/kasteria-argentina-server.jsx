import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-argentina-server');
}

export default function KasteriaArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-argentina-server" />;
}
