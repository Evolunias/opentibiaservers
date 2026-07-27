import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-trainers-server-north-america');
}

export default function SabrehavenWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-trainers-server-north-america" />;
}
