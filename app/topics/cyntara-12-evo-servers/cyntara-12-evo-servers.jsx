import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-12-evo-servers');
}

export default function Cyntara12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-12-evo-servers" />;
}
