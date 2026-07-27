import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-trainers-server-sweden');
}

export default function ImperianicWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-trainers-server-sweden" />;
}
