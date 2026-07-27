import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-trainers-server-argentina');
}

export default function TibiaoriginsWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-trainers-server-argentina" />;
}
