import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-website');
}

export default function PopularThorniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-website" />;
}
