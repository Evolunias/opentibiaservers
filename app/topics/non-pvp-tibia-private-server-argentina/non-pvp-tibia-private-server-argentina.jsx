import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibia-private-server-argentina');
}

export default function NonPvpTibiaPrivateServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibia-private-server-argentina" />;
}
