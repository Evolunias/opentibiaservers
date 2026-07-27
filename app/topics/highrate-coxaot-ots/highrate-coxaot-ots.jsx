import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-ots');
}

export default function HighrateCoxaotOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-ots" />;
}
