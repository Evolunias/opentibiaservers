import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-trainers-server-germany');
}

export default function ImperianicWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-trainers-server-germany" />;
}
