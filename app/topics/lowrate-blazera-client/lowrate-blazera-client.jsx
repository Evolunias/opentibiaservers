import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-client');
}

export default function LowrateBlazeraClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-client" />;
}
