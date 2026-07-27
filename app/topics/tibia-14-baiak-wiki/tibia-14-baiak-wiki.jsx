import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-baiak-wiki');
}

export default function Tibia14BaiakWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-baiak-wiki" />;
}
