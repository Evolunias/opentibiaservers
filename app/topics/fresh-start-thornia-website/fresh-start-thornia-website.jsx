import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-website');
}

export default function FreshStartThorniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-website" />;
}
