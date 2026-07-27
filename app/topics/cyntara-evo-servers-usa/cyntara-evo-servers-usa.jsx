import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-evo-servers-usa');
}

export default function CyntaraEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-evo-servers-usa" />;
}
