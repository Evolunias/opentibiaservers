import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-trainers-server-north-america');
}

export default function ImperianicWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-trainers-server-north-america" />;
}
