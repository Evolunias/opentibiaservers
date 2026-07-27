import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-official');
}

export default function PopularThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-official" />;
}
