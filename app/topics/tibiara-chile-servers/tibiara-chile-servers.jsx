import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-chile-servers');
}

export default function TibiaraChileServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-chile-servers" />;
}
