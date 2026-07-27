import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-trainers-server-usa');
}

export default function ShadowcoresWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-trainers-server-usa" />;
}
