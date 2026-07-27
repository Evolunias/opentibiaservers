import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-wiki-canada');
}

export default function NoResetWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-wiki-canada" />;
}
