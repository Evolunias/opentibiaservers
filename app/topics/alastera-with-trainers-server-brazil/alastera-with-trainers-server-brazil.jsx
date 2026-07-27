import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-trainers-server-brazil');
}

export default function AlasteraWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-trainers-server-brazil" />;
}
