import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-enforced-server-latin-america');
}

export default function OtmadnessPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-enforced-server-latin-america" />;
}
