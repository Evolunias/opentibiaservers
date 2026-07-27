import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-register');
}

export default function SerenityRegisterKeywordPage() {
  return <StaticKeywordPage slug="serenity-register" />;
}
