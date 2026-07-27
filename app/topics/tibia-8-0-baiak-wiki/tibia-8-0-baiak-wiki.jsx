import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-baiak-wiki');
}

export default function Tibia80BaiakWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-baiak-wiki" />;
}
