import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-realesta-servers');
}

export default function EvoRealestaServersKeywordPage() {
  return <StaticKeywordPage slug="evo-realesta-servers" />;
}
