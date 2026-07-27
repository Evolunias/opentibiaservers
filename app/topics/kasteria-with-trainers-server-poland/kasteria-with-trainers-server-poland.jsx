import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-trainers-server-poland');
}

export default function KasteriaWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-trainers-server-poland" />;
}
