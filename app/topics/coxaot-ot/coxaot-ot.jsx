import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-ot');
}

export default function CoxaotOtKeywordPage() {
  return <StaticKeywordPage slug="coxaot-ot" />;
}
