import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-trainers-server-germany');
}

export default function UnlineWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-with-trainers-server-germany" />;
}
