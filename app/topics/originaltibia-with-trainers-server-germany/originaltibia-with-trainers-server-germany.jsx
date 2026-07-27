import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-trainers-server-germany');
}

export default function OriginaltibiaWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-trainers-server-germany" />;
}
