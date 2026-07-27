import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-wiki');
}

export default function OfficialCoxaotWikiKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-wiki" />;
}
