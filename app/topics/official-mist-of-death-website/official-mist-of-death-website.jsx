import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death-website');
}

export default function OfficialMistOfDeathWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death-website" />;
}
