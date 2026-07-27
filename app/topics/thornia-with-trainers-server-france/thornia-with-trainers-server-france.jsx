import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-trainers-server-france');
}

export default function ThorniaWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-trainers-server-france" />;
}
