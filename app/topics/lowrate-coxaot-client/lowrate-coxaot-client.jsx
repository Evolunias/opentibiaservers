import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-coxaot-client');
}

export default function LowrateCoxaotClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-coxaot-client" />;
}
