import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-website');
}

export default function NoResetClassicusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-website" />;
}
