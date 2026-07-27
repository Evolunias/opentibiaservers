import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-client');
}

export default function NewRealeraClientKeywordPage() {
  return <StaticKeywordPage slug="new-realera-client" />;
}
