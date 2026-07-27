import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus');
}

export default function FreshStartClassicusKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus" />;
}
