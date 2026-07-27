import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-trainers-server-usa');
}

export default function TibiascapeWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-trainers-server-usa" />;
}
