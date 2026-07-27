import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-client');
}

export default function FreshStartSerenityClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-client" />;
}
