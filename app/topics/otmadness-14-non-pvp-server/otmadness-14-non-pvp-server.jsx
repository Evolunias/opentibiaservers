import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-non-pvp-server');
}

export default function Otmadness14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-non-pvp-server" />;
}
