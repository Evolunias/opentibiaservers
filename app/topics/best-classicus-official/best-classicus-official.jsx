import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-official');
}

export default function BestClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-official" />;
}
