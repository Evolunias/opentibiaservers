import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-0-with-trainers-server');
}

export default function Cyntara100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-0-with-trainers-server" />;
}
