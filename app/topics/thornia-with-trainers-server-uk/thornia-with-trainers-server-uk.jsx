import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-trainers-server-uk');
}

export default function ThorniaWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-trainers-server-uk" />;
}
