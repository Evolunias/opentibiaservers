import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-wiki');
}

export default function NoResetThorniaWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-wiki" />;
}
