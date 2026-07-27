import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-ot');
}

export default function ActiveCoxaotOtKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-ot" />;
}
