import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-ots');
}

export default function PopularCoxaotOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-ots" />;
}
