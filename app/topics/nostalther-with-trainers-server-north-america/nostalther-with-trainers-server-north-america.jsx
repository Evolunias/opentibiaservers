import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-trainers-server-north-america');
}

export default function NostaltherWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-trainers-server-north-america" />;
}
