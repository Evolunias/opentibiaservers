import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot');
}

export default function CurrentThaisotKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot" />;
}
