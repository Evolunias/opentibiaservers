import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-official');
}

export default function CustomMiracleOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-official" />;
}
