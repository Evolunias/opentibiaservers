import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-wiki');
}

export default function NoResetNepreniaWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-wiki" />;
}
