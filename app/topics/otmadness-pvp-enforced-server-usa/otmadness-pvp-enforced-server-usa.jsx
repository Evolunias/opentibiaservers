import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-enforced-server-usa');
}

export default function OtmadnessPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-enforced-server-usa" />;
}
