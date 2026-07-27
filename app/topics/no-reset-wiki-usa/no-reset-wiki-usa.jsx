import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-wiki-usa');
}

export default function NoResetWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-wiki-usa" />;
}
