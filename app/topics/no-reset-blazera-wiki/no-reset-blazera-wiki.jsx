import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-wiki');
}

export default function NoResetBlazeraWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-wiki" />;
}
