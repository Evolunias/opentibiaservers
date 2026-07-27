import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-register');
}

export default function NewSerenityRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-register" />;
}
