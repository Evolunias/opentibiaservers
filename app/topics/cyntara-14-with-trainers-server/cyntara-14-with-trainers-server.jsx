import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-with-trainers-server');
}

export default function Cyntara14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-with-trainers-server" />;
}
