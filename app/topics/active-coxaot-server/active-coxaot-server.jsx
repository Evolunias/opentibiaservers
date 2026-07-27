import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-server');
}

export default function ActiveCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-server" />;
}
