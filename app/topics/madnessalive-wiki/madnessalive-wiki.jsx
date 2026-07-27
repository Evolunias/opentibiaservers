import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-wiki');
}

export default function MadnessaliveWikiKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-wiki" />;
}
