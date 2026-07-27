import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibianus-website');
}

export default function OfficialTibianusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-tibianus-website" />;
}
