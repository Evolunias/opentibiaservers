import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-trainers-server-latin-america');
}

export default function OxygenotWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-trainers-server-latin-america" />;
}
