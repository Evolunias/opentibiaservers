import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-trainers-server-north-america');
}

export default function InfernalOtWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-trainers-server-north-america" />;
}
