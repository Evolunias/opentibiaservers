import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera-wiki');
}

export default function SameraWikiKeywordPage() {
  return <StaticKeywordPage slug="samera-wiki" />;
}
