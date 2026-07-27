import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-client');
}

export default function TibiaraClientKeywordPage() {
  return <StaticKeywordPage slug="tibiara-client" />;
}
