import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-website');
}

export default function NoResetNilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-website" />;
}
