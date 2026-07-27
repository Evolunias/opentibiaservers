import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-client');
}

export default function TopBlazeraClientKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-client" />;
}
