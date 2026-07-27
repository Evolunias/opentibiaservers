import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-official');
}

export default function TopClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-official" />;
}
