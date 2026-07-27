import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-serenity-register');
}

export default function NewSeasonSerenityRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-serenity-register" />;
}
