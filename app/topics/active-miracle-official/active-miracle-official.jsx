import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle-official');
}

export default function ActiveMiracleOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-miracle-official" />;
}
