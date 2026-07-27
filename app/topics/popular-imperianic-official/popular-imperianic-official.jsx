import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-official');
}

export default function PopularImperianicOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-official" />;
}
