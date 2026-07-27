import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-98-evo-servers');
}

export default function Coxaot1098EvoServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-98-evo-servers" />;
}
