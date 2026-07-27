import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-10-0-with-trainers-server');
}

export default function AureraGlobal100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-10-0-with-trainers-server" />;
}
