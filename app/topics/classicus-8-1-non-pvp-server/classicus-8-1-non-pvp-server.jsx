import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-1-non-pvp-server');
}

export default function Classicus81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-1-non-pvp-server" />;
}
