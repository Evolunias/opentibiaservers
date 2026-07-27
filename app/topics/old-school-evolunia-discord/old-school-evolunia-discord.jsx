import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolunia-discord');
}

export default function OldSchoolEvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolunia-discord" />;
}
