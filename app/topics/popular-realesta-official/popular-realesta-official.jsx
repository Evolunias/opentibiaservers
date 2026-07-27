import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-official');
}

export default function PopularRealestaOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-official" />;
}
