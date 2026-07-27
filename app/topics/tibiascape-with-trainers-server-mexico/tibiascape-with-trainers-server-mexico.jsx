import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-trainers-server-mexico');
}

export default function TibiascapeWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-trainers-server-mexico" />;
}
