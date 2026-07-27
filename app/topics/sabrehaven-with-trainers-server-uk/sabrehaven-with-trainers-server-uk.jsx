import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-trainers-server-uk');
}

export default function SabrehavenWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-trainers-server-uk" />;
}
