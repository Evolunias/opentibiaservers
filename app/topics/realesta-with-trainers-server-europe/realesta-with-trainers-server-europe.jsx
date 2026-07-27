import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-trainers-server-europe');
}

export default function RealestaWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-trainers-server-europe" />;
}
