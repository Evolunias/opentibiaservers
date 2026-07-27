import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-trainers-server-usa');
}

export default function ImperianicWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-trainers-server-usa" />;
}
