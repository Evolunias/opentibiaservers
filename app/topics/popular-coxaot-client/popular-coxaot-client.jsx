import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-client');
}

export default function PopularCoxaotClientKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-client" />;
}
