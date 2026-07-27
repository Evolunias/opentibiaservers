import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-wiki');
}

export default function InfernalOtWikiKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-wiki" />;
}
