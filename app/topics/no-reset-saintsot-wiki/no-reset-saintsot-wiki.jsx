import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot-wiki');
}

export default function NoResetSaintsotWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot-wiki" />;
}
