import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-enforced-server-canada');
}

export default function OtmadnessPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-enforced-server-canada" />;
}
