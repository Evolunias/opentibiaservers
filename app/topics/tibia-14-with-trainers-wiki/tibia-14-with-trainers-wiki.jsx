import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-trainers-wiki');
}

export default function Tibia14WithTrainersWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-trainers-wiki" />;
}
