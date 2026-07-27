import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-coxaot-ot');
}

export default function LowrateCoxaotOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-coxaot-ot" />;
}
