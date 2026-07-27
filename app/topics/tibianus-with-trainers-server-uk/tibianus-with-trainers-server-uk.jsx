import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-trainers-server-uk');
}

export default function TibianusWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-trainers-server-uk" />;
}
