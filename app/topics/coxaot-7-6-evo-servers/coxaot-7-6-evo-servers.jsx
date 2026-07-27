import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-6-evo-servers');
}

export default function Coxaot76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-6-evo-servers" />;
}
