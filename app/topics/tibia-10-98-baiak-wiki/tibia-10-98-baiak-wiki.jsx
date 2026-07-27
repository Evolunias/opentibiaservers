import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-baiak-wiki');
}

export default function Tibia1098BaiakWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-baiak-wiki" />;
}
