import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-trainers-server-france');
}

export default function ArcaniarlWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-trainers-server-france" />;
}
