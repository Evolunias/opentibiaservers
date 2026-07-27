import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity-register');
}

export default function ActiveSerenityRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-serenity-register" />;
}
