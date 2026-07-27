import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-client');
}

export default function NewRealestaClientKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-client" />;
}
