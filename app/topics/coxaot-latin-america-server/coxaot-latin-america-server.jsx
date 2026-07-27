import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-latin-america-server');
}

export default function CoxaotLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-latin-america-server" />;
}
