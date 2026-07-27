import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-server');
}

export default function NewOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-server" />;
}
