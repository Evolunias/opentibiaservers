import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-trainers-server-usa');
}

export default function UnlineWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="unline-with-trainers-server-usa" />;
}
