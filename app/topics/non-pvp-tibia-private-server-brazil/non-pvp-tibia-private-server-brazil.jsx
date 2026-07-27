import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibia-private-server-brazil');
}

export default function NonPvpTibiaPrivateServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibia-private-server-brazil" />;
}
