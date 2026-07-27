import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-register');
}

export default function OfficialSerenityRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-register" />;
}
