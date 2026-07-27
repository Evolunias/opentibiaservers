import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-1-with-trainers-server');
}

export default function Originaltibia71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-1-with-trainers-server" />;
}
