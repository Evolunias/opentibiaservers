import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-trainers-server-uk');
}

export default function AureraGlobalWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-trainers-server-uk" />;
}
