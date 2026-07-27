import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-usa-server');
}

export default function TibiaraUsaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-usa-server" />;
}
