import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-ots');
}

export default function CoxaotOtsKeywordPage() {
  return <StaticKeywordPage slug="coxaot-ots" />;
}
