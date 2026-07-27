import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-training');
}

export default function CyntaraTrainingKeywordPage() {
  return <StaticKeywordPage slug="cyntara-training" />;
}
