import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-server');
}

export default function TopCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-server" />;
}
