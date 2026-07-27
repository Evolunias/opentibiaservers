import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity');
}

export default function LowrateSerenityKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity" />;
}
