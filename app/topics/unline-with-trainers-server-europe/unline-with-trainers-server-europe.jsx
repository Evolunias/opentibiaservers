import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-trainers-server-europe');
}

export default function UnlineWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-with-trainers-server-europe" />;
}
