import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-14-with-trainers-server');
}

export default function Noxiousot14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-14-with-trainers-server" />;
}
