import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-trainers-server-usa');
}

export default function SabrehavenWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-trainers-server-usa" />;
}
