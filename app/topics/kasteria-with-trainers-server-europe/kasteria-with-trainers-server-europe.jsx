import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-trainers-server-europe');
}

export default function KasteriaWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-trainers-server-europe" />;
}
