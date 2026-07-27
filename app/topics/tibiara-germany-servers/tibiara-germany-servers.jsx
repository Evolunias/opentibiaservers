import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-germany-servers');
}

export default function TibiaraGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-germany-servers" />;
}
