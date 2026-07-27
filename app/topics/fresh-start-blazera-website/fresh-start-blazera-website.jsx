import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-website');
}

export default function FreshStartBlazeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-website" />;
}
