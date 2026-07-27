import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-6-pvp-server');
}

export default function Classicus76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-6-pvp-server" />;
}
