import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-trainers-server-poland');
}

export default function TibiaoriginsWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-trainers-server-poland" />;
}
