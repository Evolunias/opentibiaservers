import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity');
}

export default function NewSerenityKeywordPage() {
  return <StaticKeywordPage slug="new-serenity" />;
}
