import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibia-private-server-canada');
}

export default function NonPvpTibiaPrivateServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibia-private-server-canada" />;
}
