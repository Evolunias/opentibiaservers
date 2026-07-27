import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-wiki');
}

export default function DoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="dolera-wiki" />;
}
