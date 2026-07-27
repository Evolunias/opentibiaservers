import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-server');
}

export default function PopularCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-server" />;
}
