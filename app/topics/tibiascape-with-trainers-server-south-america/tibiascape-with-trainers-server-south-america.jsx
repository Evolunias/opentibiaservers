import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-trainers-server-south-america');
}

export default function TibiascapeWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-trainers-server-south-america" />;
}
