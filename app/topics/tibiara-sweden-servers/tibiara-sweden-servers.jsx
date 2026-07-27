import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-sweden-servers');
}

export default function TibiaraSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-sweden-servers" />;
}
