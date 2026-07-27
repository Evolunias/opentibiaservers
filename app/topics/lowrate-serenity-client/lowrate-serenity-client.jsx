import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-client');
}

export default function LowrateSerenityClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-client" />;
}
