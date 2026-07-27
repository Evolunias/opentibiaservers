import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-trainers-server-europe');
}

export default function AlasteraWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-trainers-server-europe" />;
}
