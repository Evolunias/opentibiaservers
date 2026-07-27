import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-trainers-server-mexico');
}

export default function RealeraWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realera-with-trainers-server-mexico" />;
}
