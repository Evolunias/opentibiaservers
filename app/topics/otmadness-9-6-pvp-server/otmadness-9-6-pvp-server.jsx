import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-9-6-pvp-server');
}

export default function Otmadness96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-9-6-pvp-server" />;
}
