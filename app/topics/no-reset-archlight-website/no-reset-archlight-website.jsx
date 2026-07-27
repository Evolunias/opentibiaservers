import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-website');
}

export default function NoResetArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-website" />;
}
