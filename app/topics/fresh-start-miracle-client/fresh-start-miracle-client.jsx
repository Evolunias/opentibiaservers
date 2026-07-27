import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-client');
}

export default function FreshStartMiracleClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-client" />;
}
