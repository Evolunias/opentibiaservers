import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-server-france');
}

export default function OtmadnessPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-server-france" />;
}
