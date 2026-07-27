import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-trainers-server-poland');
}

export default function TibiascapeWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-trainers-server-poland" />;
}
