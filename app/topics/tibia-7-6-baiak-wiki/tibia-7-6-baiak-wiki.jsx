import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-baiak-wiki');
}

export default function Tibia76BaiakWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-baiak-wiki" />;
}
