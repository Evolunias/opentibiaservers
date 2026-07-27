import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-register');
}

export default function FreshStartSerenityRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-register" />;
}
