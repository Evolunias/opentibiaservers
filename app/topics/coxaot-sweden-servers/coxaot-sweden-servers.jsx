import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-sweden-servers');
}

export default function CoxaotSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-sweden-servers" />;
}
