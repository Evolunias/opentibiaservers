import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-ots');
}

export default function ActiveCoxaotOtsKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-ots" />;
}
