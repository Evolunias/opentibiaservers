import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-server-canada');
}

export default function ShadowcoresPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-server-canada" />;
}
