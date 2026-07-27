import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-wiki-south-america');
}

export default function NoResetWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-wiki-south-america" />;
}
