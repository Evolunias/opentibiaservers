import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot');
}

export default function PopularThaisotKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot" />;
}
