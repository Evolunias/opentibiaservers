import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-official');
}

export default function PopularTibiascapeOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-official" />;
}
