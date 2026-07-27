import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-private-server');
}

export default function PopularOtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-private-server" />;
}
