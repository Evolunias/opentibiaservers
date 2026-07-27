import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-private-server');
}

export default function ActiveTibiaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-private-server" />;
}
