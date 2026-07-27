import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-trainers-server-argentina');
}

export default function TibiascapeWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-trainers-server-argentina" />;
}
