import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-trainers-server-europe');
}

export default function TibiascapeWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-trainers-server-europe" />;
}
