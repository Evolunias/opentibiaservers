import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-client');
}

export default function CurrentSerenityClientKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-client" />;
}
