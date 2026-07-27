import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-pvp-server');
}

export default function Medivia12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-pvp-server" />;
}
