import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-trainers-server-north-america');
}

export default function UnlineWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-with-trainers-server-north-america" />;
}
