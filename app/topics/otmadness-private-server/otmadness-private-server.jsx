import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-private-server');
}

export default function OtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-private-server" />;
}
