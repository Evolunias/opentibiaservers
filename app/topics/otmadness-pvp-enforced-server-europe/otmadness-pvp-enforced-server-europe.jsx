import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-enforced-server-europe');
}

export default function OtmadnessPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-enforced-server-europe" />;
}
