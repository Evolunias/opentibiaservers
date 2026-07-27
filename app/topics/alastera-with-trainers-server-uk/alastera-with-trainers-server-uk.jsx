import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-trainers-server-uk');
}

export default function AlasteraWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-trainers-server-uk" />;
}
