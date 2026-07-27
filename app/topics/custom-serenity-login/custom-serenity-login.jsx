import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-login');
}

export default function CustomSerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-login" />;
}
