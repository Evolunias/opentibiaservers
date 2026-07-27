import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-retro-server-sweden');
}

export default function OtmadnessRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-retro-server-sweden" />;
}
