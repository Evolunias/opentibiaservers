import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-wiki');
}

export default function NewCoxaotWikiKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-wiki" />;
}
