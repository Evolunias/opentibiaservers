import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-wiki-north-america');
}

export default function NoResetWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-wiki-north-america" />;
}
