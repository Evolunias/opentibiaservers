import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-website');
}

export default function NoResetAlasteraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-website" />;
}
