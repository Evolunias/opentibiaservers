import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-trainers-server-argentina');
}

export default function ThorniaWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-trainers-server-argentina" />;
}
