import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-private-server');
}

export default function CustomBlazeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-private-server" />;
}
