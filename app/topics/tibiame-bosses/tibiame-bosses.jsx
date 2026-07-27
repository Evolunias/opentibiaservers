import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-bosses');
}

export default function TibiameBossesKeywordPage() {
  return <StaticKeywordPage slug="tibiame-bosses" />;
}
