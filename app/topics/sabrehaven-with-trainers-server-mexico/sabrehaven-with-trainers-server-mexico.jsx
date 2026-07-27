import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-trainers-server-mexico');
}

export default function SabrehavenWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-trainers-server-mexico" />;
}
