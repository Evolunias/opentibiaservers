import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-discord-brazil');
}

export default function OldSchoolDiscordBrazilKeywordPage() {
  return <StaticKeywordPage slug="old-school-discord-brazil" />;
}
