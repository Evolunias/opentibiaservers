import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-trainers-server-argentina');
}

export default function DemolidoresWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-trainers-server-argentina" />;
}
