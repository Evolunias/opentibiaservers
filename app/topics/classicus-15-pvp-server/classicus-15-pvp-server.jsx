import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-pvp-server');
}

export default function Classicus15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-pvp-server" />;
}
