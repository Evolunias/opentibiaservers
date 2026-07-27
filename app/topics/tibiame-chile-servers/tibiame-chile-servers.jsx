import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-chile-servers');
}

export default function TibiameChileServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-chile-servers" />;
}
