import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-14-with-trainers-server');
}

export default function AureraGlobal14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-14-with-trainers-server" />;
}
