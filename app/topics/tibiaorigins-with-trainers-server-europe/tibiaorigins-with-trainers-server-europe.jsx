import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-trainers-server-europe');
}

export default function TibiaoriginsWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-trainers-server-europe" />;
}
