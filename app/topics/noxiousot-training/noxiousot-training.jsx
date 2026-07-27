import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-training');
}

export default function NoxiousotTrainingKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-training" />;
}
