import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-website');
}

export default function NoResetUnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-website" />;
}
