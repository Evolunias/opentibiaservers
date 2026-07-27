import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-baiak-wiki');
}

export default function Tibia100BaiakWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-baiak-wiki" />;
}
