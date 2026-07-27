import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-retro-server-south-america');
}

export default function OtmadnessRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-retro-server-south-america" />;
}
