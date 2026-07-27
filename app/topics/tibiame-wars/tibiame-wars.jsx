import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-wars');
}

export default function TibiameWarsKeywordPage() {
  return <StaticKeywordPage slug="tibiame-wars" />;
}
