import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-server-argentina');
}

export default function OtmadnessPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-server-argentina" />;
}
