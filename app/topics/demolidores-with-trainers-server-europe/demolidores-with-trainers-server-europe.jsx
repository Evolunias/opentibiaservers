import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-trainers-server-europe');
}

export default function DemolidoresWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-trainers-server-europe" />;
}
