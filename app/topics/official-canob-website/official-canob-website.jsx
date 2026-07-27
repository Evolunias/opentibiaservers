import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-website');
}

export default function OfficialCanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-canob-website" />;
}
