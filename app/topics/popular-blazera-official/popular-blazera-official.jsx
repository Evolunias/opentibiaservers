import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-official');
}

export default function PopularBlazeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-official" />;
}
