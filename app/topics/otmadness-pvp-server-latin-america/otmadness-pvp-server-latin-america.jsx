import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-server-latin-america');
}

export default function OtmadnessPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-server-latin-america" />;
}
