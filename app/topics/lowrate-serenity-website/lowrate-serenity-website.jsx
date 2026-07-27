import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-website');
}

export default function LowrateSerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-website" />;
}
