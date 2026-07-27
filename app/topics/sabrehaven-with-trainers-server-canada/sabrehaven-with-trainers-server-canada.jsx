import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-trainers-server-canada');
}

export default function SabrehavenWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-trainers-server-canada" />;
}
