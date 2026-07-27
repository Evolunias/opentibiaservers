import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-trainers-server-argentina');
}

export default function TibijkaWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-trainers-server-argentina" />;
}
