import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-server-usa');
}

export default function OtmadnessPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-server-usa" />;
}
