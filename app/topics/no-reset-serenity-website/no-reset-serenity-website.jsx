import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-website');
}

export default function NoResetSerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-website" />;
}
