import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-evo-servers');
}

export default function Coxaot15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-evo-servers" />;
}
