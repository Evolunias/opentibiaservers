import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-website');
}

export default function NoResetCanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-website" />;
}
