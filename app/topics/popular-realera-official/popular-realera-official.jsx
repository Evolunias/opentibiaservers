import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-official');
}

export default function PopularRealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-official" />;
}
