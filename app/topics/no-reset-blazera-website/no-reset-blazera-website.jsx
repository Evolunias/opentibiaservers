import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-website');
}

export default function NoResetBlazeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-website" />;
}
