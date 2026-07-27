import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-trainers-server-usa');
}

export default function OriginaltibiaWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-trainers-server-usa" />;
}
