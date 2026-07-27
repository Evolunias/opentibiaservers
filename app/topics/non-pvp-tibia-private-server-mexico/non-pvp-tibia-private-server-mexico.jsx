import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibia-private-server-mexico');
}

export default function NonPvpTibiaPrivateServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibia-private-server-mexico" />;
}
