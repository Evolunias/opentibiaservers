import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-website');
}

export default function NoResetSabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-website" />;
}
