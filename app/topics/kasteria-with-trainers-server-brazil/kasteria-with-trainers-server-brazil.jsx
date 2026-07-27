import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-trainers-server-brazil');
}

export default function KasteriaWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-trainers-server-brazil" />;
}
