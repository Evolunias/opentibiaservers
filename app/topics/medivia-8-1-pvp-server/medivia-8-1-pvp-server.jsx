import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-1-pvp-server');
}

export default function Medivia81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-1-pvp-server" />;
}
