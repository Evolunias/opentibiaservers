import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-pvp-server-poland');
}

export default function TibiaPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibia-pvp-server-poland" />;
}
