import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-official');
}

export default function TopKasteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-official" />;
}
