import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-ot');
}

export default function PopularCoxaotOtKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-ot" />;
}
