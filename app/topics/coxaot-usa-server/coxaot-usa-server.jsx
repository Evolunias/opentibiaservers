import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-usa-server');
}

export default function CoxaotUsaServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-usa-server" />;
}
