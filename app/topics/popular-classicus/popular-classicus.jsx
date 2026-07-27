import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus');
}

export default function PopularClassicusKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus" />;
}
