import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-wiki');
}

export default function NoResetTibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-wiki" />;
}
