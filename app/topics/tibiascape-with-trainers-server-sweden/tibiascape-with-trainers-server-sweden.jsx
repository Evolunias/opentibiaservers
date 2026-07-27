import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-trainers-server-sweden');
}

export default function TibiascapeWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-trainers-server-sweden" />;
}
