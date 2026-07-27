import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-ot');
}

export default function FreshStartMiracleOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-ot" />;
}
