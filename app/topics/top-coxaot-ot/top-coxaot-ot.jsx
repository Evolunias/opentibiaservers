import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-ot');
}

export default function TopCoxaotOtKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-ot" />;
}
