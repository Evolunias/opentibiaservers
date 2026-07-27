import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-trainers-server-north-america');
}

export default function DemolidoresWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-trainers-server-north-america" />;
}
