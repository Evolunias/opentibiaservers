import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-trainers-server-latin-america');
}

export default function OriginaltibiaWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-trainers-server-latin-america" />;
}
