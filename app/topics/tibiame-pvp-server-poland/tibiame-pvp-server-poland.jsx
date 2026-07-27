import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-server-poland');
}

export default function TibiamePvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-server-poland" />;
}
