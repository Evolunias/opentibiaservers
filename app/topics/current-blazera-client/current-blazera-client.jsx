import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-client');
}

export default function CurrentBlazeraClientKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-client" />;
}
