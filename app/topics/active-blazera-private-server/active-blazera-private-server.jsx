import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-private-server');
}

export default function ActiveBlazeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-private-server" />;
}
