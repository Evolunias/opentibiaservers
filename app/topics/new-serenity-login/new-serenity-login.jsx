import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-login');
}

export default function NewSerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-login" />;
}
