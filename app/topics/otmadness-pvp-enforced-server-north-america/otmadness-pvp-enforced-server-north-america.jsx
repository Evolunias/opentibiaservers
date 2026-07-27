import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-enforced-server-north-america');
}

export default function OtmadnessPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-enforced-server-north-america" />;
}
