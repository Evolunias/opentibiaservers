import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-baiak-wiki');
}

export default function Tibia71BaiakWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-baiak-wiki" />;
}
