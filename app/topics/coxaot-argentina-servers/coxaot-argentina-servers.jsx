import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-argentina-servers');
}

export default function CoxaotArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-argentina-servers" />;
}
