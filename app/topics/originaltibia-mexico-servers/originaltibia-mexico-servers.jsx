import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-mexico-servers');
}

export default function OriginaltibiaMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-mexico-servers" />;
}
