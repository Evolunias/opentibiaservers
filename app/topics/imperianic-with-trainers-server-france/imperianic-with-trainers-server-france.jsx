import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-trainers-server-france');
}

export default function ImperianicWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-trainers-server-france" />;
}
