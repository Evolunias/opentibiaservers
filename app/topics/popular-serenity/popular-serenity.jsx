import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity');
}

export default function PopularSerenityKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity" />;
}
