import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-non-pvp-server');
}

export default function Classicus15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-non-pvp-server" />;
}
