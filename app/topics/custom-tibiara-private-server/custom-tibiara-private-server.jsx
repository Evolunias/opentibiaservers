import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-private-server');
}

export default function CustomTibiaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-private-server" />;
}
