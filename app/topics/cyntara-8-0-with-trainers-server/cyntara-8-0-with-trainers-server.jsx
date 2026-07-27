import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-0-with-trainers-server');
}

export default function Cyntara80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-0-with-trainers-server" />;
}
