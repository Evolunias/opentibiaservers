import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-wiki');
}

export default function SabrehavenWikiKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-wiki" />;
}
