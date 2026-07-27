import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-website');
}

export default function NewRealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-realera-website" />;
}
