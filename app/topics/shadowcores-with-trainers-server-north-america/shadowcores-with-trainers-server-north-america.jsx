import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-trainers-server-north-america');
}

export default function ShadowcoresWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-trainers-server-north-america" />;
}
