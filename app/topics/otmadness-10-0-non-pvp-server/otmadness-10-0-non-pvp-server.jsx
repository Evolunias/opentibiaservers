import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-0-non-pvp-server');
}

export default function Otmadness100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-0-non-pvp-server" />;
}
