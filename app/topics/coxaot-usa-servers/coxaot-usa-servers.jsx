import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-usa-servers');
}

export default function CoxaotUsaServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-usa-servers" />;
}
