import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-trainers-server-poland');
}

export default function ThorniaWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-trainers-server-poland" />;
}
