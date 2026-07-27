import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-trainers-server-germany');
}

export default function ThorniaWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-trainers-server-germany" />;
}
