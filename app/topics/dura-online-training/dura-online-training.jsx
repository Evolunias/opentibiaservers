import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-training');
}

export default function DuraOnlineTrainingKeywordPage() {
  return <StaticKeywordPage slug="dura-online-training" />;
}
