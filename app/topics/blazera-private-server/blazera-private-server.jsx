import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-private-server');
}

export default function BlazeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-private-server" />;
}
