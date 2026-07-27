import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-trainers-server-france');
}

export default function ShadowcoresWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-trainers-server-france" />;
}
