import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-mexico-server');
}

export default function OriginaltibiaMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-mexico-server" />;
}
