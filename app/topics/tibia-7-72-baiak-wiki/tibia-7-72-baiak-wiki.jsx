import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-baiak-wiki');
}

export default function Tibia772BaiakWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-baiak-wiki" />;
}
