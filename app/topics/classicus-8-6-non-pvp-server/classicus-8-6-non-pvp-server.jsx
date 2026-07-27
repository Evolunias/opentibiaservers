import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-6-non-pvp-server');
}

export default function Classicus86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-6-non-pvp-server" />;
}
