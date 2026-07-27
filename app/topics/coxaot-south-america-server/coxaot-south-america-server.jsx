import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-south-america-server');
}

export default function CoxaotSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-south-america-server" />;
}
