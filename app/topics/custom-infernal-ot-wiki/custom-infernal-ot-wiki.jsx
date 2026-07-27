import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-wiki');
}

export default function CustomInfernalOtWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-wiki" />;
}
