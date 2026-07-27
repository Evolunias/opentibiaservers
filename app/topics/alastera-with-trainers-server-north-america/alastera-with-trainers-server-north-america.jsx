import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-trainers-server-north-america');
}

export default function AlasteraWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-trainers-server-north-america" />;
}
