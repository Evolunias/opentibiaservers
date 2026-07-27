import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-trainers-server-uk');
}

export default function KasteriaWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-trainers-server-uk" />;
}
