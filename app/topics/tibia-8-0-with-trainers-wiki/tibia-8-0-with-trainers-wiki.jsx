import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-trainers-wiki');
}

export default function Tibia80WithTrainersWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-trainers-wiki" />;
}
