import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-trainers-server-latin-america');
}

export default function InfernalOtWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-trainers-server-latin-america" />;
}
