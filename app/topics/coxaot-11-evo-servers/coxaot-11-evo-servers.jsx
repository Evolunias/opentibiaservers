import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-evo-servers');
}

export default function Coxaot11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-evo-servers" />;
}
