import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-wiki');
}

export default function ActiveInfernalOtWikiKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-wiki" />;
}
