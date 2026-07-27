import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-4-evo-servers');
}

export default function Cyntara74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-4-evo-servers" />;
}
