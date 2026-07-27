import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-website');
}

export default function OfficialSabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-website" />;
}
