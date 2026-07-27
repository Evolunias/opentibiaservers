import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-baiak-wiki');
}

export default function Tibia81BaiakWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-baiak-wiki" />;
}
