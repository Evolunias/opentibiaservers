import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-discord');
}

export default function OldSchoolMarolaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-discord" />;
}
