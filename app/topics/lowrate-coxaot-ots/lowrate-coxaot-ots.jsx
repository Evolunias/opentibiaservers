import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-coxaot-ots');
}

export default function LowrateCoxaotOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-coxaot-ots" />;
}
