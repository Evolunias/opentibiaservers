import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-trainers-server-argentina');
}

export default function AureraGlobalWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-trainers-server-argentina" />;
}
