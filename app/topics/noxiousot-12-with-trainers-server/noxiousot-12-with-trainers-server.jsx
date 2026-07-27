import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-12-with-trainers-server');
}

export default function Noxiousot12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-12-with-trainers-server" />;
}
