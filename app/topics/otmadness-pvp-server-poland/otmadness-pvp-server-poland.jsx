import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-server-poland');
}

export default function OtmadnessPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-server-poland" />;
}
