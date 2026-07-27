import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-login');
}

export default function NoResetSerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-login" />;
}
