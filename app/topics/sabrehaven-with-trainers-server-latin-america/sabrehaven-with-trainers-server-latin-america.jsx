import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-trainers-server-latin-america');
}

export default function SabrehavenWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-trainers-server-latin-america" />;
}
