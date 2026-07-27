import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-baiak-wiki');
}

export default function Tibia12BaiakWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-baiak-wiki" />;
}
