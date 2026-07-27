import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-client');
}

export default function NewThaisotClientKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-client" />;
}
