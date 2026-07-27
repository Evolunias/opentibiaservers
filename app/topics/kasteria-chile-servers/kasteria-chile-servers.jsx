import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-chile-servers');
}

export default function KasteriaChileServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-chile-servers" />;
}
