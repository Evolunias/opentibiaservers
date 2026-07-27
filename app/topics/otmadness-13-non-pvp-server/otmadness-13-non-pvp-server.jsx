import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-13-non-pvp-server');
}

export default function Otmadness13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-13-non-pvp-server" />;
}
