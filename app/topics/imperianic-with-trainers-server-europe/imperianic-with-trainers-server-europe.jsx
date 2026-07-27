import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-trainers-server-europe');
}

export default function ImperianicWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-trainers-server-europe" />;
}
