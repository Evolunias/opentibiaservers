import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eternal-odyssey-website');
}

export default function NoResetEternalOdysseyWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eternal-odyssey-website" />;
}
