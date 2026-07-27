import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-0-with-trainers-server');
}

export default function Originaltibia80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-0-with-trainers-server" />;
}
