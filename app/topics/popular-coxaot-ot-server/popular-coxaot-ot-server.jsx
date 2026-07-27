import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-ot-server');
}

export default function PopularCoxaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-ot-server" />;
}
