import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-client');
}

export default function TopCoxaotClientKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-client" />;
}
