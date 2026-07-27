import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity');
}

export default function TopSerenityKeywordPage() {
  return <StaticKeywordPage slug="top-serenity" />;
}
