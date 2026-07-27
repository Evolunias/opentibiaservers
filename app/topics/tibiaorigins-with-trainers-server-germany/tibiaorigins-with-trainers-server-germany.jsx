import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-trainers-server-germany');
}

export default function TibiaoriginsWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-trainers-server-germany" />;
}
