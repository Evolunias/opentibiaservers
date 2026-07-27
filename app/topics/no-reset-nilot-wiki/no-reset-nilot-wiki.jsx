import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-wiki');
}

export default function NoResetNilotWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-wiki" />;
}
