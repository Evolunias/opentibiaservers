import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-trainers-server-sweden');
}

export default function TibiaoriginsWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-trainers-server-sweden" />;
}
