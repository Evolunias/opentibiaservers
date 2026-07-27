import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-official');
}

export default function PopularOriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-official" />;
}
