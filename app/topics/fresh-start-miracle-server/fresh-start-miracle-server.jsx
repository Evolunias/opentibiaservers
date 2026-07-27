import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-server');
}

export default function FreshStartMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-server" />;
}
