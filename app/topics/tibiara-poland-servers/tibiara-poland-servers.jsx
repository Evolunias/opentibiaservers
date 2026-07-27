import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-poland-servers');
}

export default function TibiaraPolandServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-poland-servers" />;
}
