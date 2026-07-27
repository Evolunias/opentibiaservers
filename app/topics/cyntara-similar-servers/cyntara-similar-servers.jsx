import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-similar-servers');
}

export default function CyntaraSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-similar-servers" />;
}
