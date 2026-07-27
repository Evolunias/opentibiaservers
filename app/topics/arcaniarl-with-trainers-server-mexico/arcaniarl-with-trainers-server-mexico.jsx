import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-trainers-server-mexico');
}

export default function ArcaniarlWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-trainers-server-mexico" />;
}
