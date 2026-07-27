import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-trainers-server-europe');
}

export default function ShadowcoresWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-trainers-server-europe" />;
}
