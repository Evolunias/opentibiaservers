import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-latin-america-servers');
}

export default function CoxaotLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-latin-america-servers" />;
}
