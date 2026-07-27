import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-14-evo-servers');
}

export default function Coxaot14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-14-evo-servers" />;
}
