import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus');
}

export default function TopClassicusKeywordPage() {
  return <StaticKeywordPage slug="top-classicus" />;
}
