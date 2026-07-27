import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-register');
}

export default function NoResetSerenityRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-register" />;
}
