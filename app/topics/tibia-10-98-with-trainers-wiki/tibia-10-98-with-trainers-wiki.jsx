import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-trainers-wiki');
}

export default function Tibia1098WithTrainersWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-trainers-wiki" />;
}
