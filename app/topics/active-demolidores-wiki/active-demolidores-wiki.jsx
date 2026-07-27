import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-wiki');
}

export default function ActiveDemolidoresWikiKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-wiki" />;
}
