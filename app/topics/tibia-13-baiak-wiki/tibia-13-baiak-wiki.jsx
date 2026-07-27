import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-baiak-wiki');
}

export default function Tibia13BaiakWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-baiak-wiki" />;
}
