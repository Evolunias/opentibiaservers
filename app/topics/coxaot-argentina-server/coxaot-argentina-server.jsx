import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-argentina-server');
}

export default function CoxaotArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-argentina-server" />;
}
