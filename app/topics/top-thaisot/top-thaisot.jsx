import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot');
}

export default function TopThaisotKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot" />;
}
