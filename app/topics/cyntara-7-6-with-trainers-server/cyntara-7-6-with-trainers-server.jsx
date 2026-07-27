import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-6-with-trainers-server');
}

export default function Cyntara76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-6-with-trainers-server" />;
}
