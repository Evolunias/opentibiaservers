import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-trainers-server-brazil');
}

export default function ThorniaWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-trainers-server-brazil" />;
}
