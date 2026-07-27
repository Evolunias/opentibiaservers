import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-trainers-server-germany');
}

export default function KasteriaWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-trainers-server-germany" />;
}
