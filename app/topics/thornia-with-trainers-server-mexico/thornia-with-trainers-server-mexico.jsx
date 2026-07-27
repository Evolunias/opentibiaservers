import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-trainers-server-mexico');
}

export default function ThorniaWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-trainers-server-mexico" />;
}
