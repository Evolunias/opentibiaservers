import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-98-non-pvp-server');
}

export default function Otmadness1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-98-non-pvp-server" />;
}
