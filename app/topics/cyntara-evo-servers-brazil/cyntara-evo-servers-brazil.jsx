import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-evo-servers-brazil');
}

export default function CyntaraEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="cyntara-evo-servers-brazil" />;
}
