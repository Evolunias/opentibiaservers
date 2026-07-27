import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-wiki');
}

export default function NoResetInfernalOtWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-wiki" />;
}
