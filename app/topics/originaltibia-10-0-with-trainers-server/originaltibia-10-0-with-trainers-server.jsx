import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-with-trainers-server');
}

export default function Originaltibia100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-with-trainers-server" />;
}
