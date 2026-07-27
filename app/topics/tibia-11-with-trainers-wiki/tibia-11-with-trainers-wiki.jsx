import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-trainers-wiki');
}

export default function Tibia11WithTrainersWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-trainers-wiki" />;
}
