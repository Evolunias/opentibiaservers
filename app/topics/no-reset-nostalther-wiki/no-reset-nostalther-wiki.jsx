import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-wiki');
}

export default function NoResetNostaltherWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-wiki" />;
}
