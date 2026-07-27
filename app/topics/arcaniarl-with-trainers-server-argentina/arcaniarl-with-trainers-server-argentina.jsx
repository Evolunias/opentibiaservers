import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-trainers-server-argentina');
}

export default function ArcaniarlWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-trainers-server-argentina" />;
}
