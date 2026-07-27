import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-website');
}

export default function TibiantisWebsiteKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-website" />;
}
