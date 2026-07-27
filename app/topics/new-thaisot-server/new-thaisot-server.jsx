import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-server');
}

export default function NewThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-server" />;
}
