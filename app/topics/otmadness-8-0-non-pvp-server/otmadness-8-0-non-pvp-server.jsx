import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-0-non-pvp-server');
}

export default function Otmadness80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-0-non-pvp-server" />;
}
