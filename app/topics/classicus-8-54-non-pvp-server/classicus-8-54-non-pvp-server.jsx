import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-54-non-pvp-server');
}

export default function Classicus854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-54-non-pvp-server" />;
}
