import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-trainers-server-france');
}

export default function TibiascapeWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-trainers-server-france" />;
}
