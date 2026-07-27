import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-neprenia-server');
}

export default function PvpNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-neprenia-server" />;
}
