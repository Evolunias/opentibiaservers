import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-website');
}

export default function NoResetRealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-website" />;
}
