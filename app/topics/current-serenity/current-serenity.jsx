import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity');
}

export default function CurrentSerenityKeywordPage() {
  return <StaticKeywordPage slug="current-serenity" />;
}
