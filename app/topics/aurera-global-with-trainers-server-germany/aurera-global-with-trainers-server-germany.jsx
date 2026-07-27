import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-trainers-server-germany');
}

export default function AureraGlobalWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-trainers-server-germany" />;
}
