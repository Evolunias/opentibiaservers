import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-private-server');
}

export default function ActiveImperianicPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-private-server" />;
}
