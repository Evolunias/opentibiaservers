import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-server');
}

export default function FreshStartOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-server" />;
}
