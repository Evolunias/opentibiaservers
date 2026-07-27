import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-south-america-servers');
}

export default function CoxaotSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-south-america-servers" />;
}
