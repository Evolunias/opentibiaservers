import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibia-private-server-brazil');
}

export default function PvpTibiaPrivateServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibia-private-server-brazil" />;
}
