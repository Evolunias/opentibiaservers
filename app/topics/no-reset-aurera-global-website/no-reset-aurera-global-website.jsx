import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global-website');
}

export default function NoResetAureraGlobalWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global-website" />;
}
