import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-mist-of-death-website');
}

export default function NoResetMistOfDeathWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-mist-of-death-website" />;
}
