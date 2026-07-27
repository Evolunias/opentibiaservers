import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-1-evo-servers');
}

export default function Coxaot71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-1-evo-servers" />;
}
