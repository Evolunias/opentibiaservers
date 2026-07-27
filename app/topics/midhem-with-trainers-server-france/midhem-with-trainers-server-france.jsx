import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-trainers-server-france');
}

export default function MidhemWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-trainers-server-france" />;
}
