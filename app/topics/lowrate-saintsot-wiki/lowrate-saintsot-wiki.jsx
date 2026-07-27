import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-wiki');
}

export default function LowrateSaintsotWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-wiki" />;
}
