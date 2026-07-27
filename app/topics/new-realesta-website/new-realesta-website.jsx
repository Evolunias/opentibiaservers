import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-website');
}

export default function NewRealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-website" />;
}
