import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-website');
}

export default function OfficialBlazeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-website" />;
}
