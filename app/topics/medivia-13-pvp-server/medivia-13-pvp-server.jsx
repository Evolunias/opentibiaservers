import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-13-pvp-server');
}

export default function Medivia13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-13-pvp-server" />;
}
