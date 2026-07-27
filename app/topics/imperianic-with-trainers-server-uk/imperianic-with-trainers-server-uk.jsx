import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-trainers-server-uk');
}

export default function ImperianicWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-trainers-server-uk" />;
}
