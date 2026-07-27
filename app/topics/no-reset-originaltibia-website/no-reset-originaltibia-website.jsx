import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-website');
}

export default function NoResetOriginaltibiaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-website" />;
}
