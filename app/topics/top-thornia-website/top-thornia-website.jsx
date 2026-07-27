import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-website');
}

export default function TopThorniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-website" />;
}
