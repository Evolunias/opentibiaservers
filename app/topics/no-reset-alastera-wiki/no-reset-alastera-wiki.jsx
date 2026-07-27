import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-wiki');
}

export default function NoResetAlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-wiki" />;
}
