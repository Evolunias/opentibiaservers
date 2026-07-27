import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-wiki');
}

export default function NoResetDemolidoresWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-wiki" />;
}
