import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-pvp-server');
}

export default function Otmadness14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-pvp-server" />;
}
