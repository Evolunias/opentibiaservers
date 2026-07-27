import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-trainers-server-north-america');
}

export default function TibiaoriginsWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-trainers-server-north-america" />;
}
