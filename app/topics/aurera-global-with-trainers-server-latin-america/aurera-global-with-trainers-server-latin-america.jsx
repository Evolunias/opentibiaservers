import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-trainers-server-latin-america');
}

export default function AureraGlobalWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-trainers-server-latin-america" />;
}
