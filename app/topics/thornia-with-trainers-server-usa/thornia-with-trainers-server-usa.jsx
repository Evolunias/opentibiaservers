import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-trainers-server-usa');
}

export default function ThorniaWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-trainers-server-usa" />;
}
