import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-trainers-wiki');
}

export default function Tibia71WithTrainersWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-trainers-wiki" />;
}
