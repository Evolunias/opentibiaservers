import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-enforced-server-argentina');
}

export default function OtmadnessPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-enforced-server-argentina" />;
}
