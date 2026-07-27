import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-register');
}

export default function BestSerenityRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-register" />;
}
