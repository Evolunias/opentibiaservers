import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-ot-server');
}

export default function FreshStartMiracleOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-ot-server" />;
}
