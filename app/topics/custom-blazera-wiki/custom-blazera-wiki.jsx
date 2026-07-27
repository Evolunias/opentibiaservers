import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-wiki');
}

export default function CustomBlazeraWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-wiki" />;
}
