import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-enforced-server-france');
}

export default function OtmadnessPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-enforced-server-france" />;
}
