import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity');
}

export default function FreshStartSerenityKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity" />;
}
