import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus-website');
}

export default function OfficialClassicusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-classicus-website" />;
}
