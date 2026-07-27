import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-trainers-server-mexico');
}

export default function TibianusWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-trainers-server-mexico" />;
}
