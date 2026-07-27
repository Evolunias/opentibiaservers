import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-wiki');
}

export default function EmpirebrWikiKeywordPage() {
  return <StaticKeywordPage slug="empirebr-wiki" />;
}
