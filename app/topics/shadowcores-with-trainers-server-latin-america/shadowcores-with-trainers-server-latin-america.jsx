import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-trainers-server-latin-america');
}

export default function ShadowcoresWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-trainers-server-latin-america" />;
}
