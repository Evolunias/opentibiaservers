import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-baiak-wiki');
}

export default function Tibia11BaiakWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-baiak-wiki" />;
}
