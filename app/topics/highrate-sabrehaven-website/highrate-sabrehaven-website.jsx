import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-website');
}

export default function HighrateSabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-website" />;
}
