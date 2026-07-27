import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-client');
}

export default function PopularSerenityClientKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-client" />;
}
