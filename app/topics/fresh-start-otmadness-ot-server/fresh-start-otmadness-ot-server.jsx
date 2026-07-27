import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-ot-server');
}

export default function FreshStartOtmadnessOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-ot-server" />;
}
