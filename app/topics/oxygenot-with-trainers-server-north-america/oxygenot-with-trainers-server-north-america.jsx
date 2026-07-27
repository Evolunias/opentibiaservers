import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-trainers-server-north-america');
}

export default function OxygenotWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-trainers-server-north-america" />;
}
