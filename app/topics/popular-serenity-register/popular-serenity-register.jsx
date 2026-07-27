import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-register');
}

export default function PopularSerenityRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-register" />;
}
