import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-website');
}

export default function NoResetRealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-website" />;
}
