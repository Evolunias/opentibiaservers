import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-trainers-wiki');
}

export default function Tibia772WithTrainersWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-trainers-wiki" />;
}
