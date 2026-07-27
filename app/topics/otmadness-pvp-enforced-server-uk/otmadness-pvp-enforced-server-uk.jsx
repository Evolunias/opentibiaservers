import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-enforced-server-uk');
}

export default function OtmadnessPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-enforced-server-uk" />;
}
