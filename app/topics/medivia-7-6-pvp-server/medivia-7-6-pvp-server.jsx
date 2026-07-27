import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-6-pvp-server');
}

export default function Medivia76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-6-pvp-server" />;
}
