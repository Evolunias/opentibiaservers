import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-trainers-server-argentina');
}

export default function TibianusWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-trainers-server-argentina" />;
}
