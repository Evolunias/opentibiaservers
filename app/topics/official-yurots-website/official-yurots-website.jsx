import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-website');
}

export default function OfficialYurotsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-website" />;
}
