import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-website');
}

export default function CustomTibiantisWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-website" />;
}
