import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-login');
}

export default function LowrateSerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-login" />;
}
