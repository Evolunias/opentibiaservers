import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-website');
}

export default function NoResetMiracleWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-website" />;
}
