import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-coxaot-server');
}

export default function LowrateCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-coxaot-server" />;
}
