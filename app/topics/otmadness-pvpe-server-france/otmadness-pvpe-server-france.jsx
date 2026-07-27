import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvpe-server-france');
}

export default function OtmadnessPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvpe-server-france" />;
}
