import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-sweden-server');
}

export default function TibiaraSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-sweden-server" />;
}
