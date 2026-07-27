import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-wiki');
}

export default function CustomCoxaotWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-wiki" />;
}
