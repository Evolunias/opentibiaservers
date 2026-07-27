import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-usa-server');
}

export default function OtmadnessUsaServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-usa-server" />;
}
