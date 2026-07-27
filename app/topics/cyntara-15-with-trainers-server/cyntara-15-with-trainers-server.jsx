import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-15-with-trainers-server');
}

export default function Cyntara15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-15-with-trainers-server" />;
}
