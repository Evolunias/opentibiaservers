import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-trainers-server-brazil');
}

export default function TibiantisWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-trainers-server-brazil" />;
}
