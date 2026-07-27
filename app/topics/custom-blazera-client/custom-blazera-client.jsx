import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-client');
}

export default function CustomBlazeraClientKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-client" />;
}
