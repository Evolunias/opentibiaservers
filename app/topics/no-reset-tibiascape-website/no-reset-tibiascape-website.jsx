import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-website');
}

export default function NoResetTibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-website" />;
}
