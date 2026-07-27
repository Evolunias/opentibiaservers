import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-client');
}

export default function NewSerenityClientKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-client" />;
}
