import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-mexico-server');
}

export default function CyntaraMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-mexico-server" />;
}
