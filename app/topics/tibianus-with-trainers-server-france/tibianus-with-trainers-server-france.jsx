import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-trainers-server-france');
}

export default function TibianusWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-trainers-server-france" />;
}
