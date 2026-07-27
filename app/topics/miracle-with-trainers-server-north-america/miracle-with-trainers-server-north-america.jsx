import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-with-trainers-server-north-america');
}

export default function MiracleWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-with-trainers-server-north-america" />;
}
