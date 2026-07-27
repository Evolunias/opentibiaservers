import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-website');
}

export default function NoResetTibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-website" />;
}
