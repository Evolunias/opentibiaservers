import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-login');
}

export default function FreshStartMiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-login" />;
}
