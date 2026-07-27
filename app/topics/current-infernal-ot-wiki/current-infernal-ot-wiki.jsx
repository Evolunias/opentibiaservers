import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-wiki');
}

export default function CurrentInfernalOtWikiKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-wiki" />;
}
