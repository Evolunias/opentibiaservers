import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-baiak-wiki');
}

export default function Tibia84BaiakWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-baiak-wiki" />;
}
