import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-fun-server');
}

export default function CoxaotFunServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-fun-server" />;
}
