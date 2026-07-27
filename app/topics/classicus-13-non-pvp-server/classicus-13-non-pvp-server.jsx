import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-non-pvp-server');
}

export default function Classicus13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-non-pvp-server" />;
}
