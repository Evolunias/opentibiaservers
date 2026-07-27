import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-trainers-server-germany');
}

export default function DemolidoresWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-trainers-server-germany" />;
}
