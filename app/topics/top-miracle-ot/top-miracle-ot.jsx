import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-ot');
}

export default function TopMiracleOtKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-ot" />;
}
