import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-argentina-servers');
}

export default function KasteriaArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-argentina-servers" />;
}
