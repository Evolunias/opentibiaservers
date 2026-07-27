import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-trainers-server-europe');
}

export default function TibianusWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-trainers-server-europe" />;
}
