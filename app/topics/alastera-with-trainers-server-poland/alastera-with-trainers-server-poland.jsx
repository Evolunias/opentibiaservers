import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-trainers-server-poland');
}

export default function AlasteraWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-trainers-server-poland" />;
}
