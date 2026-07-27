import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-server-germany');
}

export default function OtmadnessPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-server-germany" />;
}
