import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-similar-servers');
}

export default function TibiaraSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-similar-servers" />;
}
