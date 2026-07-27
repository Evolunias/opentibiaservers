import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-website');
}

export default function NoResetTibianusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-website" />;
}
