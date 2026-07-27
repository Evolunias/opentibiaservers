import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realera-private-server');
}

export default function CustomRealeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-realera-private-server" />;
}
