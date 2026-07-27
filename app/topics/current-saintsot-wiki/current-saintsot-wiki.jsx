import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-wiki');
}

export default function CurrentSaintsotWikiKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-wiki" />;
}
