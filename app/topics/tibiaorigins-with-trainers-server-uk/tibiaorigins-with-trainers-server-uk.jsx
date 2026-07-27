import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-trainers-server-uk');
}

export default function TibiaoriginsWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-trainers-server-uk" />;
}
