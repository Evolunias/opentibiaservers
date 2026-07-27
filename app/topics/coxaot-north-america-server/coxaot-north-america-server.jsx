import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-north-america-server');
}

export default function CoxaotNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-north-america-server" />;
}
