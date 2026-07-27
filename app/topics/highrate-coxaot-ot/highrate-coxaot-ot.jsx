import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-ot');
}

export default function HighrateCoxaotOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-ot" />;
}
