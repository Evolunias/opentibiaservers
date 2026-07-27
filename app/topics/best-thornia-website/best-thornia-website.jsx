import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-website');
}

export default function BestThorniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-website" />;
}
