import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-13-with-trainers-server');
}

export default function Noxiousot13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-13-with-trainers-server" />;
}
