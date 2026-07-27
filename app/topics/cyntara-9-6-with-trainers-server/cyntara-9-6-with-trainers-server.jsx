import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-9-6-with-trainers-server');
}

export default function Cyntara96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-9-6-with-trainers-server" />;
}
