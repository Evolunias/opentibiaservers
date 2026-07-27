import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-website');
}

export default function NewBlazeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-website" />;
}
