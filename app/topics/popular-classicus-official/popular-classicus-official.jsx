import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-official');
}

export default function PopularClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-official" />;
}
