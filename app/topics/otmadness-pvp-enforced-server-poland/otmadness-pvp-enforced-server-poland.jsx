import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-enforced-server-poland');
}

export default function OtmadnessPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-enforced-server-poland" />;
}
