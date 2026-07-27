import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera-wiki');
}

export default function NoResetElderaWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera-wiki" />;
}
