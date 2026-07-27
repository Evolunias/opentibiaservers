import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-website');
}

export default function NoResetTibijkaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-website" />;
}
