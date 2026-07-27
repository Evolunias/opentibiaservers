import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-0-evo-servers');
}

export default function Coxaot80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-0-evo-servers" />;
}
