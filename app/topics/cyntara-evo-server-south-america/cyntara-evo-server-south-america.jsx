import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-evo-server-south-america');
}

export default function CyntaraEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-evo-server-south-america" />;
}
