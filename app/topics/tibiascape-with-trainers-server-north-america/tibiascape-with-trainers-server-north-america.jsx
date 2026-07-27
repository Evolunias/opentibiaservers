import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-trainers-server-north-america');
}

export default function TibiascapeWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-trainers-server-north-america" />;
}
