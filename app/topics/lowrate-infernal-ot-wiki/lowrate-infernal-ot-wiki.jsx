import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-wiki');
}

export default function LowrateInfernalOtWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-wiki" />;
}
