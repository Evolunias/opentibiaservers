import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-mexico-servers');
}

export default function TibiaraMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-mexico-servers" />;
}
