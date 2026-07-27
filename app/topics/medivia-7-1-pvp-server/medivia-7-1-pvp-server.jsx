import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-1-pvp-server');
}

export default function Medivia71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-1-pvp-server" />;
}
