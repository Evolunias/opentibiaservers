import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-discord');
}

export default function OldSchoolSabrehavenDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-discord" />;
}
