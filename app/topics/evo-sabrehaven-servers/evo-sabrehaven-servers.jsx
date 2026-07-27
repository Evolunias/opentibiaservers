import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-sabrehaven-servers');
}

export default function EvoSabrehavenServersKeywordPage() {
  return <StaticKeywordPage slug="evo-sabrehaven-servers" />;
}
