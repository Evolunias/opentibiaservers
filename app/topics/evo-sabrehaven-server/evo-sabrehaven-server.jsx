import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-sabrehaven-server');
}

export default function EvoSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="evo-sabrehaven-server" />;
}
