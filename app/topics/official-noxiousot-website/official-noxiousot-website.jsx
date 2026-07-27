import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-website');
}

export default function OfficialNoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-website" />;
}
