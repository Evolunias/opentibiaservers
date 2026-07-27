import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-website');
}

export default function OfficialOriginaltibiaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-website" />;
}
