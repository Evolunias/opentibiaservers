import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-54-pvp-server');
}

export default function Medivia854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-54-pvp-server" />;
}
