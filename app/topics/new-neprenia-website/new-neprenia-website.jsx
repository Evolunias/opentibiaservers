import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-website');
}

export default function NewNepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-website" />;
}
