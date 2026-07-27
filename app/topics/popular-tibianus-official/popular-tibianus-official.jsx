import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-official');
}

export default function PopularTibianusOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-official" />;
}
