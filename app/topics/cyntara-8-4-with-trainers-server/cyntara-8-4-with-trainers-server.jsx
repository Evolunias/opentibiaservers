import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-4-with-trainers-server');
}

export default function Cyntara84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-4-with-trainers-server" />;
}
