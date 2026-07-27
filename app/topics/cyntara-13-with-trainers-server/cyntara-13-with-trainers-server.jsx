import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-with-trainers-server');
}

export default function Cyntara13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-with-trainers-server" />;
}
