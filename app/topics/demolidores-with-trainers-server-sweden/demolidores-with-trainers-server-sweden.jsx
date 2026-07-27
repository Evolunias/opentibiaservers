import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-trainers-server-sweden');
}

export default function DemolidoresWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-trainers-server-sweden" />;
}
