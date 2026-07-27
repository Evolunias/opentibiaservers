import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-trainers-server-south-america');
}

export default function ThorniaWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-trainers-server-south-america" />;
}
