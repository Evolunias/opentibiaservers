import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-12-with-trainers-server');
}

export default function Originaltibia12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-12-with-trainers-server" />;
}
