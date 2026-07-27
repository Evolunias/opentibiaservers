import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-11-with-trainers-server');
}

export default function Noxiousot11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-11-with-trainers-server" />;
}
