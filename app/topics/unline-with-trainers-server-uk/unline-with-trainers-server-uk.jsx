import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-trainers-server-uk');
}

export default function UnlineWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="unline-with-trainers-server-uk" />;
}
