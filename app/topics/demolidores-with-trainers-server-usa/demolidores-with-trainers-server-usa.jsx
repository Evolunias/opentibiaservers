import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-trainers-server-usa');
}

export default function DemolidoresWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-trainers-server-usa" />;
}
