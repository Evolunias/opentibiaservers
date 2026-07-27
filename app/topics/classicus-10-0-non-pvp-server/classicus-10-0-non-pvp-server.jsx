import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-0-non-pvp-server');
}

export default function Classicus100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-0-non-pvp-server" />;
}
