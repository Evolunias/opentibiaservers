import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-1-non-pvp-server');
}

export default function Classicus71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-1-non-pvp-server" />;
}
