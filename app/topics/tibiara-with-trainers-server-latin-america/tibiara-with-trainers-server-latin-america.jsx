import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-trainers-server-latin-america');
}

export default function TibiaraWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-trainers-server-latin-america" />;
}
