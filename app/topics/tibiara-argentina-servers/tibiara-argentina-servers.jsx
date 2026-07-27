import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-argentina-servers');
}

export default function TibiaraArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-argentina-servers" />;
}
