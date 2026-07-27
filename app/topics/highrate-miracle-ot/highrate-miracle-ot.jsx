import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-ot');
}

export default function HighrateMiracleOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-ot" />;
}
