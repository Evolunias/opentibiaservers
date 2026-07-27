import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-private-server');
}

export default function TopBlazeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-private-server" />;
}
