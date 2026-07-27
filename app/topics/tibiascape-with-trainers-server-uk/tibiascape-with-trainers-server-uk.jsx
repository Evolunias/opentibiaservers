import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-trainers-server-uk');
}

export default function TibiascapeWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-trainers-server-uk" />;
}
