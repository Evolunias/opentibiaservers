import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-website');
}

export default function ThorniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="thornia-website" />;
}
