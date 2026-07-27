import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-trainers-server-germany');
}

export default function AlasteraWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-trainers-server-germany" />;
}
