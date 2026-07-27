import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-0-pvp-server');
}

export default function Classicus80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-0-pvp-server" />;
}
