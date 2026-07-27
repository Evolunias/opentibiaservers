import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-trainers-server-poland');
}

export default function AureraGlobalWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-trainers-server-poland" />;
}
