import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-with-trainers-server-germany');
}

export default function NoxiousotWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-with-trainers-server-germany" />;
}
