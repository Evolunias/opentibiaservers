import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-trainers-server-latin-america');
}

export default function ThorniaWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-trainers-server-latin-america" />;
}
