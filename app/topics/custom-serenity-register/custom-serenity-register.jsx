import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-register');
}

export default function CustomSerenityRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-register" />;
}
