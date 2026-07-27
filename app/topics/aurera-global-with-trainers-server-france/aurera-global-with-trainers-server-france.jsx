import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-trainers-server-france');
}

export default function AureraGlobalWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-trainers-server-france" />;
}
