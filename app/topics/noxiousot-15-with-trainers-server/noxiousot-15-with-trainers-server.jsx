import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-15-with-trainers-server');
}

export default function Noxiousot15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-15-with-trainers-server" />;
}
