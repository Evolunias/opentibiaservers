import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-trainers-server-europe');
}

export default function ElderaWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-trainers-server-europe" />;
}
