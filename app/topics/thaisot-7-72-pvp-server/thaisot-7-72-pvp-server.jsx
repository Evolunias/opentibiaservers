import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-72-pvp-server');
}

export default function Thaisot772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-72-pvp-server" />;
}
