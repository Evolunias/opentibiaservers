import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-trainers-server-france');
}

export default function OriginaltibiaWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-trainers-server-france" />;
}
