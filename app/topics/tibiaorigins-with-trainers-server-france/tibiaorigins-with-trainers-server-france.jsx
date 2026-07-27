import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-trainers-server-france');
}

export default function TibiaoriginsWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-trainers-server-france" />;
}
