import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-with-trainers-server-latin-america');
}

export default function NoxiousotWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-with-trainers-server-latin-america" />;
}
