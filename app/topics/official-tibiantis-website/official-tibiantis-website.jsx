import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-website');
}

export default function OfficialTibiantisWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-website" />;
}
