import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-trainers-server-argentina');
}

export default function ShadowcoresWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-trainers-server-argentina" />;
}
