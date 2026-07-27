import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibia-private-server-usa');
}

export default function NonPvpTibiaPrivateServerUsaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibia-private-server-usa" />;
}
