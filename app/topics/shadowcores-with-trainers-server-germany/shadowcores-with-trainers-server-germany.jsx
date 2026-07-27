import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-trainers-server-germany');
}

export default function ShadowcoresWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-trainers-server-germany" />;
}
