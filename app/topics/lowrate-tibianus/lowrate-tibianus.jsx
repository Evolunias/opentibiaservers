import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus');
}

export default function LowrateTibianusKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus" />;
}
