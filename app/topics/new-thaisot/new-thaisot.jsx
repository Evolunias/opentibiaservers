import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot');
}

export default function NewThaisotKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot" />;
}
