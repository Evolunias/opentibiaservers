import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-12-with-trainers-server');
}

export default function Cyntara12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-12-with-trainers-server" />;
}
