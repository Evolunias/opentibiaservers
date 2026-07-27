import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-client');
}

export default function NewBlazeraClientKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-client" />;
}
