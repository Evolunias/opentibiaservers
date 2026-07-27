import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-register');
}

export default function TopSerenityRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-register" />;
}
