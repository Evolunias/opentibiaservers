import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-6-with-trainers-server');
}

export default function Originaltibia86WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-6-with-trainers-server" />;
}
