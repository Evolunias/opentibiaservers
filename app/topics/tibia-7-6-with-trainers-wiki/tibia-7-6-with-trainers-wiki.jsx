import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-trainers-wiki');
}

export default function Tibia76WithTrainersWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-trainers-wiki" />;
}
