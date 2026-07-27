import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-client');
}

export default function ActiveBlazeraClientKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-client" />;
}
