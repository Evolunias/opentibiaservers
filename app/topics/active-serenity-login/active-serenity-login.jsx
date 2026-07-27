import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity-login');
}

export default function ActiveSerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="active-serenity-login" />;
}
