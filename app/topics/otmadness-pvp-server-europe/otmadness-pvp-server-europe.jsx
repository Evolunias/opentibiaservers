import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-server-europe');
}

export default function OtmadnessPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-server-europe" />;
}
