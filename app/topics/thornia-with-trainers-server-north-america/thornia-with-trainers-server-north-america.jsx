import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-trainers-server-north-america');
}

export default function ThorniaWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-trainers-server-north-america" />;
}
