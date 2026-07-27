import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-server');
}

export default function CustomBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-server" />;
}
