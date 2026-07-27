import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-with-trainers-server');
}

export default function AureraGlobal15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-with-trainers-server" />;
}
