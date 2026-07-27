import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibia-private-server-france');
}

export default function NonPvpTibiaPrivateServerFranceKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibia-private-server-france" />;
}
