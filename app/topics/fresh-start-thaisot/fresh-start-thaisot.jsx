import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot');
}

export default function FreshStartThaisotKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot" />;
}
