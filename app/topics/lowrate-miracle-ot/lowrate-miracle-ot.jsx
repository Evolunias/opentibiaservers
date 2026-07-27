import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-ot');
}

export default function LowrateMiracleOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-ot" />;
}
