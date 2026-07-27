import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-trainers-server-france');
}

export default function DemolidoresWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-trainers-server-france" />;
}
