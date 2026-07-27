import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-9-6-non-pvp-server');
}

export default function Classicus96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-9-6-non-pvp-server" />;
}
