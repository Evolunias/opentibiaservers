import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-4-with-trainers-server');
}

export default function Originaltibia74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-4-with-trainers-server" />;
}
