import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-website');
}

export default function NoResetMidhemWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-website" />;
}
