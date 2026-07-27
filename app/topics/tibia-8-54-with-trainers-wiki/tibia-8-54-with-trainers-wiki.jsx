import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-trainers-wiki');
}

export default function Tibia854WithTrainersWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-trainers-wiki" />;
}
