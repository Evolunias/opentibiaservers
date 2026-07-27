import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-12-evo-servers');
}

export default function Realesta12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-12-evo-servers" />;
}
