import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-pvp-server');
}

export default function Medivia11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-pvp-server" />;
}
