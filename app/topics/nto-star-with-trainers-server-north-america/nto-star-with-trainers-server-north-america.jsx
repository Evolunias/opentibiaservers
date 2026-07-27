import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-trainers-server-north-america');
}

export default function NtoStarWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-trainers-server-north-america" />;
}
