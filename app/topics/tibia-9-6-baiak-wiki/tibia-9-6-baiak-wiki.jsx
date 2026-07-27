import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-baiak-wiki');
}

export default function Tibia96BaiakWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-baiak-wiki" />;
}
