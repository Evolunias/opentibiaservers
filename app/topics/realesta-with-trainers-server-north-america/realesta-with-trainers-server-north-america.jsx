import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-trainers-server-north-america');
}

export default function RealestaWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-trainers-server-north-america" />;
}
