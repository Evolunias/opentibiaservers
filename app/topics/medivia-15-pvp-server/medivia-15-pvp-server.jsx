import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-pvp-server');
}

export default function Medivia15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-pvp-server" />;
}
