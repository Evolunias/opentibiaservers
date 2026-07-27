import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-mexico-server');
}

export default function TibiaraMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-mexico-server" />;
}
