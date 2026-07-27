import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-baiak-wiki');
}

export default function Tibia86BaiakWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-baiak-wiki" />;
}
