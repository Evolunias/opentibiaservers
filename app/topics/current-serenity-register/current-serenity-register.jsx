import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-register');
}

export default function CurrentSerenityRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-register" />;
}
