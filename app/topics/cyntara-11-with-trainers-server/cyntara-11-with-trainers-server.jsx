import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-11-with-trainers-server');
}

export default function Cyntara11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-11-with-trainers-server" />;
}
