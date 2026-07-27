import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-wiki');
}

export default function NoResetMadnessaliveWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-wiki" />;
}
