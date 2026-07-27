import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-official');
}

export default function FreshStartMiracleOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-official" />;
}
