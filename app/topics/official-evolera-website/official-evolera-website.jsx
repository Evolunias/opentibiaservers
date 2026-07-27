import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-website');
}

export default function OfficialEvoleraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-website" />;
}
