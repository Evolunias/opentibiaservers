import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-trainers-server-brazil');
}

export default function TibijkaWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-trainers-server-brazil" />;
}
