import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-bosses');
}

export default function OtmadnessBossesKeywordPage() {
  return <StaticKeywordPage slug="otmadness-bosses" />;
}
