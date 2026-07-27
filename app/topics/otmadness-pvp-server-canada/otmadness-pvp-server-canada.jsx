import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-server-canada');
}

export default function OtmadnessPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-server-canada" />;
}
