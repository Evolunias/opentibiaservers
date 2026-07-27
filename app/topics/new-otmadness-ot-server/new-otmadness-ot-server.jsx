import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-ot-server');
}

export default function NewOtmadnessOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-ot-server" />;
}
