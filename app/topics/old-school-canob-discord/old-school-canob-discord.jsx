import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-discord');
}

export default function OldSchoolCanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-discord" />;
}
