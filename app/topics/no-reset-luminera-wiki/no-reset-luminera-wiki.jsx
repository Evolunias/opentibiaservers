import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-wiki');
}

export default function NoResetLumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-wiki" />;
}
