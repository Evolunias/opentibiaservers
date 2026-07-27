import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-login');
}

export default function OfficialSerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-login" />;
}
