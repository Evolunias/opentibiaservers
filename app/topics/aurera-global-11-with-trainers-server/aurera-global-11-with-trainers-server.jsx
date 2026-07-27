import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-11-with-trainers-server');
}

export default function AureraGlobal11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-11-with-trainers-server" />;
}
