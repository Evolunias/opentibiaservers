import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-poland-servers');
}

export default function CoxaotPolandServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-poland-servers" />;
}
