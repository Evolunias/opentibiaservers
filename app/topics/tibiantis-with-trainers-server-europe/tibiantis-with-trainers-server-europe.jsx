import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-trainers-server-europe');
}

export default function TibiantisWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-trainers-server-europe" />;
}
