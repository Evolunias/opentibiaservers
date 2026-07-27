import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-server-usa');
}

export default function TibiamePvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-server-usa" />;
}
