import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-wiki');
}

export default function HighrateSaintsotWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-wiki" />;
}
