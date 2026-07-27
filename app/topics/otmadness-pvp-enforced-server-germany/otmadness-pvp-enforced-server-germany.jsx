import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-enforced-server-germany');
}

export default function OtmadnessPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-enforced-server-germany" />;
}
