import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-north-america-servers');
}

export default function CoxaotNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-north-america-servers" />;
}
