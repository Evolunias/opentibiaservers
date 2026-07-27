import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-fresh-start-wiki');
}

export default function Tibia1098FreshStartWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-fresh-start-wiki" />;
}
