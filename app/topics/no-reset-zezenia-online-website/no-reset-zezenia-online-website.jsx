import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zezenia-online-website');
}

export default function NoResetZezeniaOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zezenia-online-website" />;
}
