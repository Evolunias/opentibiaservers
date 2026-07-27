import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-wiki');
}

export default function ActiveMadnessaliveWikiKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-wiki" />;
}
