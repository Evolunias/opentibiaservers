import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-trainers-server-usa');
}

export default function TibiaoriginsWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-trainers-server-usa" />;
}
