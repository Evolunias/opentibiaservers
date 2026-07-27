import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-official');
}

export default function NewMiracleOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-official" />;
}
