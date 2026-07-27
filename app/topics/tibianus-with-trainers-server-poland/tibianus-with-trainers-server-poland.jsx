import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-trainers-server-poland');
}

export default function TibianusWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-trainers-server-poland" />;
}
