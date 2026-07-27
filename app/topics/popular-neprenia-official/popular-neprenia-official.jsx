import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-official');
}

export default function PopularNepreniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-official" />;
}
