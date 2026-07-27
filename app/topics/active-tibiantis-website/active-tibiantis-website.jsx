import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-website');
}

export default function ActiveTibiantisWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-website" />;
}
