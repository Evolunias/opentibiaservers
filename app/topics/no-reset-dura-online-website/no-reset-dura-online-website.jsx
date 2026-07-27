import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-website');
}

export default function NoResetDuraOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-website" />;
}
