import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-official');
}

export default function ActiveKasteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-official" />;
}
