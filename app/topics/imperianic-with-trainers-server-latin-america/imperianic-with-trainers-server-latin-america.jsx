import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-trainers-server-latin-america');
}

export default function ImperianicWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-trainers-server-latin-america" />;
}
