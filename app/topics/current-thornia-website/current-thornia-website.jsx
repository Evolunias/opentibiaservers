import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-website');
}

export default function CurrentThorniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-website" />;
}
