import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-mexico-servers');
}

export default function CyntaraMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-mexico-servers" />;
}
