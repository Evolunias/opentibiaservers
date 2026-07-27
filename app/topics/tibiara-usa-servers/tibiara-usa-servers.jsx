import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-usa-servers');
}

export default function TibiaraUsaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-usa-servers" />;
}
