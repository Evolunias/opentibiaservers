import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-website');
}

export default function NoResetEvoleraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-website" />;
}
