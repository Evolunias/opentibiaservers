import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-baiak-wiki');
}

export default function Tibia74BaiakWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-baiak-wiki" />;
}
