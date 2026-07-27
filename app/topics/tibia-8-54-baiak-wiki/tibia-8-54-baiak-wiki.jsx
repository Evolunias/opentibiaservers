import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-baiak-wiki');
}

export default function Tibia854BaiakWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-baiak-wiki" />;
}
