import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot');
}

export default function PopularOxygenotKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot" />;
}
