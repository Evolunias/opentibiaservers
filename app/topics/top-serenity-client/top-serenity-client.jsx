import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-client');
}

export default function TopSerenityClientKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-client" />;
}
