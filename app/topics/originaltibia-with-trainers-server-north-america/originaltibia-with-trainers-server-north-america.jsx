import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-trainers-server-north-america');
}

export default function OriginaltibiaWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-trainers-server-north-america" />;
}
