import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-login');
}

export default function SerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="serenity-login" />;
}
