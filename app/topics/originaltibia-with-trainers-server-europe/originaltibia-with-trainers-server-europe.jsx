import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-trainers-server-europe');
}

export default function OriginaltibiaWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-trainers-server-europe" />;
}
