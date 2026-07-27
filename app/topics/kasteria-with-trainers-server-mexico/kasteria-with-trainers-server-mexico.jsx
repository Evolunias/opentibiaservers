import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-trainers-server-mexico');
}

export default function KasteriaWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-trainers-server-mexico" />;
}
