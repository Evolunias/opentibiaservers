import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-1-non-pvp-server');
}

export default function Otmadness81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-1-non-pvp-server" />;
}
