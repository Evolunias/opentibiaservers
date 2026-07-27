import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-wiki');
}

export default function NewInfernalOtWikiKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-wiki" />;
}
